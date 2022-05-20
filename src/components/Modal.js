import { Dialog, Transition } from "@headlessui/react";

function CustomModal({ children, isOpen, closeModal }) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        open={isOpen}
        onClose={() => closeModal()}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">

            { children}
            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CustomModal;
