// src/components/Whiteboard.jsx
"use client";

import React, { useRef, useEffect, useState } from 'react';

const APP_ID = 'b1a9d9caf68a4183aa44dc3483622354';
const TOKEN = 'NETLESSSDK_YWs9MlFrSnpvTS1ObkhfUl9wbSZub25jZT0wNmE1NTAwMC1mOTI4LTExZWYtYTU2MC1iYjc4YjY2OWY3MDcmcm9sZT0wJnNpZz1iN2E5MmIxNjg5MWEwYjkwNDIyNDliN2I2MzA1N2I2Yzg5MDU3MDQ2MzlmNjVhMjRjYzA0NjIyNmRkOGY3Nzgz';
const CHANNEL = 'testChannel';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [client, setClient] = useState(null);
  const [dataStream, setDataStream] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let agoraClient = null;

    // Dynamically import AgoraRTC only on the client
    import('agora-rtc-sdk-ng').then((AgoraRTC) => {
      agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      setClient(agoraClient);

      const joinChannel = async () => {
        try {
          await agoraClient.join(APP_ID, CHANNEL, TOKEN, null);
          console.log('Joined Agora channel');

          const stream = await agoraClient.createDataStream();
          setDataStream(stream);

          // Listen for incoming drawing events
          agoraClient.on('stream-message', (evt) => {
            const { data } = evt;
            try {
              const drawingData = JSON.parse(data);
              drawFromData(drawingData);
            } catch (error) {
              console.error('Error parsing drawing data:', error);
            }
          });
        } catch (error) {
          console.error('Failed to join channel:', error);
        }
      };

      joinChannel();
    });

    // Clean up on unmount
    return () => {
      if (client) {
        client.leave();
      }
    };
  }, []);

  const drawFromData = (data) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = data.color;
    ctx.lineWidth = data.lineWidth;
    ctx.beginPath();
    ctx.moveTo(data.fromX, data.fromY);
    ctx.lineTo(data.toX, data.toY);
    ctx.stroke();
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvasRef.current.getContext('2d');

    // Draw locally
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    const drawingData = {
      fromX: lastX,
      fromY: lastY,
      toX: x,
      toY: y,
      color: '#000',
      lineWidth: 2,
    };

    // Send drawing data if dataStream is ready
    if (dataStream) {
      try {
        dataStream.send(JSON.stringify(drawingData));
      } catch (error) {
        console.error('Error sending drawing data:', error);
      }
    }

    setLastX(x);
    setLastY(y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <h2 className='text-black'>Digital Whiteboard</h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid #000' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      ></canvas>
    </div>
  );
};

export default Whiteboard;
