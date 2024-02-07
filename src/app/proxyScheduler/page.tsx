import { ProxyScheduleEditor } from "@/components/proxyScheduleEditor";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ProxyScheduler = () => {
  return (
    <ReduxStoreProvider>
      <div className="w-4/12 pt-5 mx-auto">
        <p>Make your schedule to run proxy retriver.</p>
        <Separator />
        <ProxyScheduleEditor />
      </div>
    </ReduxStoreProvider>
  );
};

export default ProxyScheduler;
