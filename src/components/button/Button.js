import css from './css/button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.btnLoadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;