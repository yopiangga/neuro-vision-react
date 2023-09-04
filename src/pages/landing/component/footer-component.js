export function FooterComponent() {
  return (
    <div className="w-full py-10 lg:px-20 px-8 grid lg:grid-cols-2 grid-cols-1 gap-8 border-t border-gray-200">
      <div>
        <h4 className="text-lg lg:text-left text-center">
          © 2023 Neuro Vision. All Rights Reserved.
        </h4>
      </div>
      <div className="flex lg:justify-end justify-center gap-4">
        <h4 className="text-lg">Terms of Use</h4>
        <h4 className="text-lg">Privacy Policy</h4>
      </div>
    </div>
  );
}
