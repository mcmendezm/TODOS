import './TodoItem.css'
import { RiCloseCircleLine } from "react-icons/ri";
import { FaRegCheckSquare } from "react-icons/fa";
function TodoItem(props) {
  return(
  <li className="todoItem">
    <span onClick={props.onComplete} className={`icon icon-check ${props.completed && "icon-check--active"}`}><FaRegCheckSquare /></span>
    <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
    <span onClick={props.onDelete} className={`icon icon-delete`}><RiCloseCircleLine /></span>
  </li>
    )
}
export {TodoItem}