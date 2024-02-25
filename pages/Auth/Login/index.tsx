import LoginForm from '../../../components/LoginForm';
import SignUpForm from '../../../components/SignUpForm';
import MainComponent from '../../../components/shared/MainComponent';

const Login: React.FC = () => {
  return (
    <MainComponent>
      <div className="p-4 text-center">
        <br />

        <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
        <br />

        <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
      </div>
    </MainComponent>
  )
}

export default Login;
