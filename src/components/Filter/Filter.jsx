import style from '../Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p className={style.filter_text}>Find contacts by name</p>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};