import * as yup from 'yup';

const required = 'Esse campo é obrigatório';
const date = 'A data deve ter o formato dd/mm/aaaa';

const FormValidation = yup.object({
  job_role: yup.string()
  .required(required),
  admission_date: yup.date(date)
  .typeError(date)
  .required(required),
  birthdate: yup.date().max(new Date(), " Oi, Você é um viajante do futuro? 👩‍🚀🚀 Caso não seja, você deve ter nascido nos dias passados")
  .typeError(date)
  .required(required),
  project: yup.string()
  .required(required),
  name: yup.string()
  .required(required).min(3, 'Nome deve ter no mínimo 3 caracteres'),
  url: yup.string()
  .required(required),
});

export default FormValidation;
