import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useSelect } from "../hook/useSelect.hook";

import classes from "./select.module.scss";
import SelectIcon from "~/public/shared/select-icon.svg";
import Button from "~/src/shared/ui/button";

interface Props<T> {
  selectOptions: Array<T>;
  currentOption: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  optionsPosTop: number;
  optionsPosLeft?: number;
  optionsPosRight?: number;
  containerRelative?: boolean;
  className?: string;
  selectButtonClassName?: string;
  selectedOptionClassName?: string;
  optionsClassName?: string;
  holder?: string;
}

export default function Select<T>({
  selectOptions,
  currentOption,
  renderItem,
  optionsPosTop,
  optionsPosLeft,
  optionsPosRight,
  containerRelative = true,
  className,
  selectButtonClassName,
  selectedOptionClassName,
  optionsClassName,
  holder,
}: Props<T>) {
  const { active, setActive, contentRef } = useSelect();

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={contentRef}
      className={`flex-column${containerRelative ? " relative" : ""} ${className}`}
    >
      <Button
        type="ghost"
        size="0"
        onClick={() => {
          setActive(!active);
        }}
        className={`${selectButtonClassName} ${active ? classes.active : ""}`}
        needActiveScale={false}
      >
        <div className="flex-row align-center gap-1">
          <span className={`${selectedOptionClassName}`}>
            {currentOption ? currentOption : holder}
          </span>
          <SelectIcon />
        </div>
      </Button>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={`${optionsClassName} ${classes.options} flex-column gap-3`}
            style={{
              top: `calc(100% + ${optionsPosTop}px)`,
              minWidth: "fit-content",
            }}
            onClick={() => {
              setActive(false);
            }}
          >
            {selectOptions.map((item, index) => {
              return renderItem(item, index);
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
