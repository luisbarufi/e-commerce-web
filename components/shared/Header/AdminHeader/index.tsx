import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignal,
  faUser,
  faGamepad,
  faCheckSquare,
  faLaptop,
  faTicketAlt,
  faDollarSign,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '../../../../styles/AdminHeader.module.css';

interface AdminHeaderProps {
  name: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  return (
    <Row className={styles.background}>
      <Col lg={6} xs>
        <Link href="/Admin"><a><FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="/Admin/Users/List"><a><FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="/Admin/Products/List"><a><FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="/Admin/Categories/List"><a><FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="/Admin/SystemReuirements/List"><a><FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="/Admin/Coupons/List"><a><FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="ml-3" /></a></Link>
        <Link href="#"><a><FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="ml-3" /></a></Link>
      </Col>

      <Col lg={6} xs>
        <div className="float-right">
          <span className={styles.name}>{name}</span>
          <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
        </div>
      </Col>
    </Row>
  )
}

export default AdminHeader;