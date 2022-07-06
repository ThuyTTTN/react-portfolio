import { Col } from "react-bootstrap";

export const projectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-box">
        <img src={imgUrl} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}