import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useEffect } from "react";
export default function ModalComponent() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  useEffect(()=>{
    onOpen();
  },[])
  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen()}
            className="capitalize"
          >
          </Button>
        
      </div>
      <Modal backdrop="blur"
      classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">یه توجه کوچولو لطفا</ModalHeader> */}
              <ModalBody className="mt-10">
              آمار توصیفی شاخه‌ای از آمار است که به توصیف داده‌ها می‌پردازد. این شاخه از آمار با استفاده از مقادیری مانند میانگین، میانه، و انحراف معیار، به خلاصه‌سازی داده‌ها و ارائه اطلاعات کلی در مورد آنها کمک می‌کند.

                مزایای استفاده از آمار توصیفی در این  برنامه آموزشی:
                <ul className=" list-disc">
                    <li>کمک به کاربران برای پیگیری پیشرفت خود</li>
                    <li>شناسایی نقاط قوت و ضعف کاربران</li>
                    <li>ارائه اطلاعات کلی در مورد عملکرد کاربران</li>
                </ul>
                <p>
                هشدار:

                استفاده از این برنامه برای تقلب در آزمون‌های آموزشی ممنوع است. اگر ثابت شود که کاربری از آمار توصیفی برای تقلب در آزمون‌های آموزشی استفاده کرده است، مسئولیت این کار بر عهده خود کاربر است و برنامه آموزشی امار با په په هیچ مسئولیتی در این زمینه ندارد.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
