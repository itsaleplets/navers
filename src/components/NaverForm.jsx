import { Formik } from 'formik';
import { FiChevronLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import FormValidation from '../services/FormValidation'
import propTypes from 'prop-types'
import '../styles/AddNaver.css';
import '../styles/CreateForm.css';

function NaverForm({ form }) {
  const history = useHistory();
  const { title, apiFunction, state } = form;
  return (
    <section className="body home">

      <div className="add">
        <FiChevronLeft onClick={() => history.push('/')} size={30} />
        <h1>{title}</h1>
      </div>

      <Formik
        initialValues={{
          job_role: '',
          admission_date: '',
          birthdate: '',
          project: '',
          name: '',
          url: ''
        }}
        validationSchema={FormValidation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          apiFunction(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form>
            <section className="createForm">
              <div>
                <label>Nome</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="Nome"
                  onChange={handleChange('name')}
                  value={values.name}
                />
                <p className="errorMsg">{touched.name && errors.name}</p>
                <label>Idade</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="Idade"
                  onChange={handleChange('birthdate')}
                  value={values.birthdate}
                />
                <p className="errorMsg">{touched.birthdate && errors.birthdate}</p>
                <label>Projetos que participou</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="Projetos que participou"
                  onChange={handleChange('project')}
                  value={values.project}
                />
                <p className="errorMsg">{touched.project && errors.project}</p>
              </div>

              <div>
                <label>Cargo</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="Cargo"
                  onChange={handleChange('job_role')}
                  value={values.job_role}
                />
                <p className="errorMsg">{touched.job_role && errors.job_role}</p>
                <label>Tempo de empresa</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="Tempo de empresa"
                  onChange={handleChange('admission_date')}
                  value={values.admission_date}
                />
                <p className="errorMsg">{touched.admission_date && errors.admission_date}</p>
                <label>URL da foto do Naver</label>
                <input
                  style={state ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}
                  placeholder="URL da foto do Naver"
                  onChange={handleChange('url')}
                  value={values.url}
                />
                <p className="errorMsg">{touched.url && errors.url}</p>
              </div>
            </section>
            
            <button className="formBtn" type="button"onClick={handleSubmit}>
              Salvar
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}

NaverForm.propTypes = {
  form: propTypes.object.isRequired,
};

export default NaverForm;
