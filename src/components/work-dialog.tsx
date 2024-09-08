import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { WorkExperienceItemProps } from "./WorkExperienceItem";
import Image from "next/image";

type MyDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  workExperience?: Omit<WorkExperienceItemProps, "onClick">;
};

export function WorkDialog({ isOpen, onClose, workExperience }: MyDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && workExperience && (
        <Dialog
          as={motion.div}
          className="relative z-50"
          onClose={onClose}
          open={isOpen}
          key={workExperience.id}
        >
          <motion.div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { type: "spring", duration: 0.2, bounce: 0 },
              }}
              exit={{
                opacity: 0,
                transition: { type: "spring", duration: 0.1, bounce: 0 },
              }}
              className="w-full max-w-lg rounded bg-white border border-imageBorder p-6"
              layoutId={workExperience.id}
            >
              <motion.div
                className="flex flex-row justify-between gap-4"
                layoutId={`${workExperience.id}-container`}
              >
                <div className="flex flex-row gap-4">
                  <motion.div
                    layoutId={`${workExperience.id}-logo`}
                    className="w-12 h-12"
                  >
                    <Image
                      src={workExperience.logoSrc}
                      alt={workExperience.logoAlt}
                      width={36}
                      height={36}
                      className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                    />
                  </motion.div>
                  <div className="flex flex-col gap-0.5">
                    <DialogTitle
                      as={motion.h3}
                      layoutId={`${workExperience.id}-company`}
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {workExperience.company}
                    </DialogTitle>
                    <Description
                      className="text-sm text-gray-500"
                      as={motion.p}
                      layoutId={`${workExperience.id}-role`}
                    >
                      {workExperience.role}
                    </Description>
                  </div>
                </div>

                <motion.p
                  layoutId={`${workExperience.id}-period`}
                  className="text-md text-secondary font-jetBrainsMono"
                >
                  {workExperience.period}
                </motion.p>
              </motion.div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-medium text-header">
                    Description
                  </h4>
                  <p
                    className="text-sm text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: workExperience.description,
                    }}
                  />
                </div>
              </div>

              {/* <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={onClose}
                >
                  Close
                </button>
              </div> */}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
