import { Link } from "react-router-dom"; 
import PropTypes from 'prop-types';
import './LinkMenu.css'


const LinkMenu = ({arrayItem}) => {
  
  return(
    <>
        { arrayItem.map(item => {
          return (
            <li className="first-level" key={item.id}>
              <Link className="first-level-link"  to={item.path}>{item.title}</Link>
              { item.child.length > 0 && (
                <ul>
                  {item.child.map(child => {
                    return (
                      <li key={child.id} className="second-level" >
                        <Link to={item.path + '/' + child.path}>{child.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })} 
    </>
  )
}
LinkMenu.propTypes = {
  arrayItem: PropTypes.array.isRequired
};
export default LinkMenu