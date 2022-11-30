import { Specifications } from '../entities/specifications.entity';
import Database from "../configs/Database";
import { getLimitAndOffset } from "../shares/get-limit-and-offset";

const speciificationRepository = Database.instance
      .getDataSource('default')
      .getRepository(Specifications)

export const create =async (parameter:Specifications) =>{
    const specification = new Specifications();

    Object.assign(parameter,specification);

    return speciificationRepository.save(specification);
}      

export const  getTemperature=async () => {
  const { limit, offset } = getLimitAndOffset({limit:10,offset:0});

  const query = speciificationRepository.createQueryBuilder('s')
                .skip(offset).take(limit);
  
  query.select('s.temperature')
       .orderBy('s.createdAt', 'DESC');

  const temperatures = await query.getMany();
  
  return temperatures;
}

export const  getCOConcentration=async () => {
  const { limit, offset } = getLimitAndOffset({limit:10,offset:0});

  const query = speciificationRepository.createQueryBuilder('s')
                .skip(offset).take(limit);
  
  query.select('s.COConcentration')
       .orderBy('s.createdAt', 'DESC');

  const COConcentrations = await query.getMany();
  
  return COConcentrations;
}

export const  getLPGGasConcentration=async () => {
  const { limit, offset } = getLimitAndOffset({limit:10,offset:0});

  const query = speciificationRepository.createQueryBuilder('s')
                .skip(offset).take(limit);
  
  query.select('s.LPGGasConcentration')
       .orderBy('s.createdAt', 'DESC');

  const LPGGasConcentrations= await query.getMany();
  
  return LPGGasConcentrations;
}

export const  getAll=async () => {
  const { limit, offset } = getLimitAndOffset({limit:10,offset:0});

  const query = speciificationRepository.createQueryBuilder('s')
                .skip(offset).take(limit);
  
  query.orderBy('s.createdAt', 'DESC');

  const specifications= await query.getMany();
  
  return specifications;
}

