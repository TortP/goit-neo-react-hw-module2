import css from './Description.module.css';

const Description = ({ title, text }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Description;
