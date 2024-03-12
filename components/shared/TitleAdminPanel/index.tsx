import { Row, Col } from 'react-bootstrap';
import TitleAndPath from './TitleAndPath';
import SearchAndIcon from './SearchAndIcon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../../../styles/AdminTitle.module.css';

interface TitleAdminPanelProps {
  title: String,
  path: String,
  icon?: IconProp
}


const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({ title, path, icon }) => {
  return (
    <Row className='mt-4'>
      {
        (icon) ?
          <>
            <Col lg={6} xs={4} className={styles.title_and_paht}>
              <TitleAndPath title={title} path={path} />
            </Col>

            <Col lg={{ span: 4, offset: 2 }} xs={8}>
              <SearchAndIcon icon={icon} />
            </Col>
          </>
          :
          <TitleAdminPanel title={title} path={path} />
      }
    </Row>
  )
}

export default TitleAdminPanel;
