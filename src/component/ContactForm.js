import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const Dispatch = useDispatch();
  const addContact=(event)=>{
        //form의 특징 submit되면 app을 리프레시 시킨디.. react는 그러면안된다.
        //그래서 그걸 막아야되는데 event.preventDefault() 써야함
        event.preventDefault();
        // Dispatch({type:"ADD_CONTACT", payload:{name: name, phoneNumber: phoneNumber}})
        Dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}})

  };

  return (

        <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>이름</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="이름을 입력해주세요" 
                // onChange={getName}/>
                onChange={(event)=>setName(event.target.value)}
                />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>전화번호</Form.Label>
            <Form.Control type="number" 
            placeholder="전화번호를 입력해주세요" 
            onChange={(event)=>setphoneNumber(event.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit"> 
            추가
        </Button>
        </Form>
  )
}

export default ContactForm