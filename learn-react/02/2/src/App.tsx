import styles from "./App.module.css";
import className from "classnames"; // 뒤에 /bind가 없으면 글로벌한 곳
import classNames from "classnames/bind"; // 뒤에 /bind가 있으면 module CSS

export default function App() {
  const isCancel = true;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={`${styles.red_c} ${isCancel ? styles.line_through : ""}`}>
        App Component
      </h1>
      <h1 className={cx("red_c", { line_through: isCancel })}>App Component</h1>
      <h1 className={`primary ${isItalic ? "italic" : ""}`}>Global</h1>
      <h1 className={className("primary", { italic: isItalic })}>Global</h1>
    </>
  );
}
