import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap'
import { productDesc, productImg } from '../../Constants/Index'

export default function ProductDesc() {
    return (
        <section>
            <Container>
                <Row>
                   {
                    productImg.map(({ img, id, title }) => {
                       return <div key={id}>
                        <img src={img} alt="" />
                        <h5>{title}</h5>
                    </div>
                    })
                   }
                    <div>
                        {
                            productDesc.map(({ title, content, id }) => {
                                return <Accordion activeKey={activeAccordion}>
                                    <Accordion.Item eventKey={id}>
                                        <Accordion.Header onClick={() => toggleAccordion({id})}>
                                            {title}{" "}
                                            <span style={{ marginLeft: "8px" }}>
                                                {activeAccordion === id ? <FaMinus /> : <FaPlus />}
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body>{content}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            })
                        }
                    </div>
                </Row>
            </Container>
        </section>
    )
}
