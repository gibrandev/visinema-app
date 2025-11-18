export default function Guest({children}) {
  return (
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden antialiased">
      {children}
    </div>
  );
}
