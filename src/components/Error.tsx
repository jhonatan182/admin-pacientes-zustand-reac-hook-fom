type ErrorProps = {
  children: React.ReactNode;
};

export default function Error({ children }: ErrorProps) {
  return (
    <p className="text-center my-4 bg-red-600 text-white p-3  text-sm font-bold uppercase">
      {children}
    </p>
  );
}
