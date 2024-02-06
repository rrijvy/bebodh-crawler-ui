import { ProxyScheduleEditor } from "@/components/proxyScheduleEditor";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ProxyScheduler = () => {
  return (
    <div className="w-4/12 pt-5 mx-auto">
      <p>Make your schedule to run proxy retriver.</p>
      <Separator />
      <ProxyScheduleEditor />
    </div>
  );
};

export default ProxyScheduler;
