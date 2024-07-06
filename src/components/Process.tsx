import React from "react";
import { CheckCircle, FileText, PlayCircle, Truck } from "lucide-react";

function Process() {
  return (
    <div className="grid lg:grid-cols-4 grid-rows-4  justify-center items-start gap-4">
      <div className="flex flex-col justify-center items-center p-8 rounded-md hover:bg-slate-800 gap-3">
        <div className="bg-white w-20 p-4 text-center rounded-full">
          <FileText size={48} color="black" />
        </div>
        <h1 className="text-3xl">1. Devis</h1>
        <p className=" text-center">
          LEnvoyez votre demande devis en ligne ou par email ou appelez nous au téléphone.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-8 rounded-md hover:bg-slate-800 gap-3">
        <div className="bg-white w-20 p-4 text-center rounded-full">
          <CheckCircle size={48} color="green" />
        </div>
        <h1 className="text-3xl">2. Confirmation</h1>
        <p className="text-center">
          Ensemble nous trouvons la meilleure solution la plus économique et
          plus de qualité.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-8 rounded-md hover:bg-slate-800 gap-3">
        <div className="bg-white w-20 p-4 text-center rounded-full">
          <PlayCircle size={48} color="blue" />
        </div>
        <h1 className="text-3xl">3. Exécution</h1>
        <p className="text-center">
          Nous nous occupons de l’achat des matériels et l’installation.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-8 rounded-md hover:bg-slate-800 gap-3">
        <div className="bg-white w-20 p-4 text-center rounded-full">
          <Truck size={48} color="orange" />
        </div>
        <h1 className="text-3xl">4. Livraison</h1>
        <p className="text-center">
          Apres les travaux vous faites le constat que tout est bien. nous
          sommes sur que vous serez satisfait.
        </p>
      </div>
    </div>
  );
}

export default Process;
