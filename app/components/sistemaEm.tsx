'use client';

import { useState } from 'react';

export default function SistemaEmbarcado() {
  
    const [linha, setLinha] = useState('');
  
    const [emEmergencia, setEmEmergencia] = useState(false);

  
    const handleAlerta = () => {
    
    setEmEmergencia(!emEmergencia);
  };

  return (
    
    <div className={`flex min-h-screen flex-col items-center justify-between p-6 transition-colors duration-500 ${emEmergencia ? 'bg-red-900' : 'bg-slate-900'}`}>
      
      {/* Header do Dispositivo */}
      <header className="w-full text-center">
        
        <h1 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
          
          Sistema Embarcado - SSP AM
        
        </h1>
        
        <p className="text-xs text-slate-500">Dispositivo #MAN-640-01</p>
      
      </header>

      {/* Corpo Principal / Controles */}
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        
        {/* Seletor de Linha */}
        <div className="w-full bg-slate-800/50 p-4 rounded-xl border border-slate-700">
          
          <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
            
            Linha em Operação
          
          </label>
          
          <select 
            
            disabled={emEmergencia}
            
            value={linha}
            
            onChange={(e) => setLinha(e.target.value)}
            
            className="w-full rounded-lg bg-slate-800 px-4 py-3 text-lg font-bold text-white border border-slate-600 focus:outline-none focus:border-blue-500 disabled:opacity-50"
          
          >
            
            <option value="">Selecione a linha...</option>
            
            <option value="560">560 - T3 / Nova Cidade / Centro</option>
            
            <option value="640">640 - T3 / T4 / Centro</option>
            
            <option value="448">448 - Cidade de Deus / T1 / Centro</option>
          
          </select>
        
        </div>

        {/* BOTÃO DE PÂNICO */}
        <button
          
          onClick={handleAlerta}
          
          disabled={!linha}
          
          className={`group relative flex h-64 w-64 items-center justify-center rounded-full font-black text-2xl uppercase tracking-wider shadow-2xl transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:pointer-events-none
            
            ${emEmergencia 
              
                ? 'bg-amber-500 text-slate-950 animate-pulse ring-8 ring-amber-500/30' 
              
                : 'bg-red-600 text-white hover:bg-red-700 ring-8 ring-red-600/20'
            
            }`}
        
        >
          {emEmergencia ? (
            
            <div className="text-center">
              
              <span>Alerta<br />Enviado</span>
              
              <span className="block text-xs font-medium mt-2 animate-bounce">Rastreando...</span>
            
            </div>
          
        ) : (
            
            <span>Botão de<br />Pânico</span>
          
          )}
        
        </button>

      </main>

      {/* Footer com Status de Conexão */}
      <footer className="w-full flex justify-between items-center text-xs text-slate-500 max-w-md border-t border-slate-800 pt-4">
        
        <div className="flex items-center gap-2">
          
          <span className={`h-2.5 w-2.5 rounded-full ${emEmergencia ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`}></span>
          
          <span>{emEmergencia ? 'TRANSMITINDO GPS' : 'Conectado ao Servidor'}</span>
        
        </div>
        
        <span>GPS: Ativo</span>
      
      </footer>

    
    </div>
  
);

}