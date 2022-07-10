import { Col, Button } from 'react-bootstrap';


function projectCard({ title, description, imgUrl, gitLink, link }) {
    

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <br/>
          <Button href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="">GitHub Link</Button>{' '}
          <Button href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="">Deployed Link</Button>{' '}
        </div>
        
        
        
      </div>
    </Col>
  )

}

export default projectCard;