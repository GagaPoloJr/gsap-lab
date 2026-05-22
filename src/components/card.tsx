interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export const Card = ({ title = 'Managing Tween Instance', children }: CardProps) => {
  return (
    <>
      <div className="bg-surface rounded-sm border-2 border-black/90 p-4 shadow-[6px_5px_0px_rgba(0,0,0,1)] transition-shadow duration-300 ease-in-out hover:shadow-[9px_9px_0px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col gap-1">
          <h1 className="text-heading text-4xl font-bold">{title}</h1>
        </div>
        <div className="my-3">{children}</div>
      </div>
    </>
  );
};
