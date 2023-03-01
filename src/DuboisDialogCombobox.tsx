// // @ts-nocheck
// import "../node_modules/@databricks/design-system/dist/index.css";
// import React from "react";
// import {
//   DialogCombobox,
//   DialogComboboxContent,
//   DialogComboboxOptionList,
//   DialogComboboxOptionListSelectItem,
//   DialogComboboxTrigger,
//   DesignSystemProvider,
//   ApplyDesignSystemFlags,
// } from "@databricks/design-system";
// import { getFakeItems } from "./faker";

// const items: any[] = getFakeItems();

// export function DuboisDialogCombobox({}) {
//   const [value, setValue] = React.useState<string>();

//   const handleChange = (updatedValue: string) => {
//     setValue(updatedValue);
//   };

//   const setAny = () => {
//     setValue(undefined);
//   };

//   return (
//     <div>
//       <DesignSystemProvider>
//         <ApplyDesignSystemFlags flags={{ USE_NEW_ICONS: version === "v2" }}>
//           <DialogCombobox label="Owner" value={value ? [value] : []}>
//             <DialogComboboxTrigger onClear={setAny} />
//             <DialogComboboxContent>
//               <DialogComboboxOptionList>
//                 <DialogComboboxOptionListSelectItem
//                   value="Any"
//                   onChange={setAny}
//                   checked={!value || value === "Any"}
//                 />
//                 {items.map((item) => (
//                   <DialogComboboxOptionListSelectItem
//                     key={item.key}
//                     value={item.value}
//                     onChange={handleChange}
//                     checked={item.value === value}
//                   />
//                 ))}
//               </DialogComboboxOptionList>
//             </DialogComboboxContent>
//           </DialogCombobox>
//         </ApplyDesignSystemFlags>
//       </DesignSystemProvider>
//     </div>
//   );
// }
