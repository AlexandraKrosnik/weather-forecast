import "./Container.scss"
import { ContainerProps } from "../../models/PropsType";
const Container =({children}:ContainerProps)=><div className="main-container">{children}</div>

export default Container;