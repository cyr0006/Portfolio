import "./Title.css";

type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ subtitle, title }: TitleProps) => {
  return (
    <div className="title">
      <p>{title}</p>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
