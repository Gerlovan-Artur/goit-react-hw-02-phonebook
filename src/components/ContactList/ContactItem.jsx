import style from '../ContactList/ContactList.module.css';

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p>
        {' '}
        
        {name} : {number}{' '}
        <button
          className={style.form_btn_del}
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>{' '}
      </p>
    </>
  );
};