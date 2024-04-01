import React, { useEffect, useState } from "react";
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {  
  // const contactList = useSelector((state) => state.contactList);
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox/>


      {/* {contactList.map((item) => (
        <ContactItem item={item}/> //부모에서 자식간에 값을넘길때는 props를 쓰는게 더 편함 // 굳이 redux사용하지않고
      ))} */}
      <div className="contact-list">
        연락처 수:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>


    </div>
  )
}

export default ContactList