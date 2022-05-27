import { Dialog, Transition } from "@headlessui/react";

function CustomModal({ children, isSideOpen, closeModal }) {
  return (
    <Transition
      show={isSideOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        open={isSideOpen}
        onClose={() => closeModal()}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm fade-in"
          aria-hidden="true"
        />

        {/* Full-screen container to center the panel */}
        <div className="fixed  flex items-center justify-end right-0 w-[85vw] lg:w-[50vw] top-0 h-screen bg-white slide-in-right">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="w-full h-full  ">
            {children}
            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CustomModal;
