import 'dotenv/config';
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import bcrypt from 'bcrypt';

export class AuthController {
  async register(req, res) {
    const { name, email, password, confirmPassword, type } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) return res.status(422).json({ msg: 'Email já cadastrado.' });

    if (password !== confirmPassword) return res.status(422).json({ msg: 'Senhas não coincidem.' });

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: passwordHash,
      type
    });

    try {
      await user.save();

      res.status(201).json({ msg: 'Usuário criado com sucesso.' });
    } catch(err) {
      res.status(500).json({ msg: err });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email: email });
  
    if (!user) return res.status(404).json({ msg: 'Usuário não encontrado.' });
    
    const checkPassword = await bcrypt.compare(password, user.password);
  
    if (!checkPassword) return res.status(422).json({ msg: 'Senha inválida.' });
  
    try {
      const secret = process.env.SECRET;

      const token = jwt.sign({
        id: user._id
      }, secret);
  
      res.status(200).json({ 
        msg: 'Usuário autenticado com sucesso',
        token
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({ msg: err });
    }
  }
}