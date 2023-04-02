import React, { useEffect, useState } from 'react';

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
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {Sets.map(
          (Set: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(Set);
                }}
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
export { }