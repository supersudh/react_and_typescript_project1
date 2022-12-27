interface iProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({
  color,
  onClick
}: iProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// 1. React.FC also means React.FunctionalComponent
export const ChildAsFC: React.FunctionComponent<iProps> = ({
  color,
  onClick,
  children
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};