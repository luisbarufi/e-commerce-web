import Header from '../Header/StorefrontHeader'

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className='d-flex flex-column sticky-footer-wrapper'>
      <Header />
        <div className='container'>
          { children }
        </div>
    </div>
  )
}

export default MainComponent;
