import { FunctionComponent } from "react";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FunctionComponent<TitleFormProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-400">{subtitle}</div>
    </>
  );
};

export default TitleForm;
