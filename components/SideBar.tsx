"use client"
import React from 'react';
import { useVSCodeStore } from "../store";
import { PiTerminalWindow } from 'react-icons/pi';
import { LuFiles } from 'react-icons/lu';
export const Sidebar: React.FC = () => {
  const {
    showExplorer,
    setShowExplorer,
    showTerminal,
    setShowTerminal,
    getTheme
  } = useVSCodeStore();
  const theme = getTheme();

  const itemStyle = {
    opacity: 0.5
  };

  const activeItemStyle = {
    opacity: 1
  };

  return (
    <div
      className="flex flex-col min-w-[25px] h-full pt-4 items-center text-3xl"
      style={{
        background: theme.sidebar.background,
        borderRight: `${theme.sidebar.borderWidth} solid ${theme.sidebar.borderColor}`,
      }}
    >
      <div
        className="flex items-center py-2 px-4 cursor-pointer"
        onClick={() => setShowExplorer(!showExplorer)}
        style={showExplorer ? activeItemStyle : itemStyle}
      >
        <LuFiles color={theme.sidebar.color} />
      </div>
      <div
        className="flex items-center py-2 px-4 cursor-pointer"
        onClick={() => setShowTerminal(!showTerminal)}
        style={showTerminal ? activeItemStyle : itemStyle}
      >
        <PiTerminalWindow color={theme.sidebar.color} />
      </div>
    </div>
  );
};

export default Sidebar;
