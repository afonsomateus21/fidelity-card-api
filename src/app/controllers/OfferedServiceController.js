import { Service } from "../models/offered-services/Service.js";

export class OfferedServiceController {
  async register(req, res) {   
    const { title, description } = req.body; 

    const service = new Service({
      title,
      description,
    });

    try {
      await service.save();

      res.status(201).json({
        msg: 'Serviço cadastrado com sucesso.',
      })
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  }

  async getServices(req, res) {
    const services = await Service.find({});
    res.status(200).json(services);
  }
}