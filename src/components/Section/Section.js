import s from './Section.module.css';
function Section(props) {
  const { children } = props;
  return <section className={s.section}>{children}</section>;
}
export default Section;
