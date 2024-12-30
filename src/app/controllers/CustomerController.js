import { Customer } from "../models/customer/Customer.js";

export class CustomerController {
  async register(req, res) {   
    const { name, email, phone } = req.body; 
    const customerExists = await Customer.findOne({ phone: phone });
  
    if (customerExists) return res.status(402).json({ msg: 'Já existe um usuário com o telefone cadastrado.' });

    const customer = new Customer({
      name,
      email,
      phone,
      starsAmount: 0
    });

    try {
      await customer.save();

      res.status(201).json({
        msg: 'Cliente cadastrado com sucesso.',
      })
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  }

  async getUserByEmail(req, res) {
    const { email } = req.query;

    const customer = await Customer.findOne({ email: email });

    if (!customer) return res.status(404).json({ msg: 'Cliente não encontrado.' });

    res.status(200).json({ customer });
  }
}