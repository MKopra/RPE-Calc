import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

type DropDownProps = {
  Sets: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  SetSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  Sets,
  SetSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the Set name
   * back to the parent component
   *
   * @param Set  The selected Set
   */
  const onClickHandler = (Set: string): void => {
    SetSelection(Set);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={classNames('dropdown', { 'active': showDropDown, 'bg-fill': showDropDown })}>
        {Sets.map(
          (Set: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(Set);
                }}
                className="text-white-800 hover:text-white-500 cursor-pointer"
              >
                {Set}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
export {};
