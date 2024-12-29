import { User } from "../../models/user/User.js";

export class UserController {
  async getUserById(req, res) {
    const id = req.params.id;
    
    const user = await User.findById(id, '-password');
  
    if (!user) return res.status(404).json({ msg: 'Usuário não encontrado.' });
  
    res.status(200).json({ user });
  }
}