import { create } from 'zustand';

export const LEVELS = [
    [
    { pos: [-1.4, 0.95], hp: 2 }, { pos: [-1.2, 0.95], hp: 1 }, { pos: [-0.8, 0.95], hp: 1 },
    { pos: [-0.6, 0.95], hp: 1 }, 
    { pos: [-0.4, 0.95], hp: 1 }, { pos: [-0.2, 0.95], hp: 1,  type: 'healer'}, { pos: [0, 0.95], hp: 1 },
    { pos: [0.2, 0.95], hp: 1, type: 'healer' }, 
    { pos: [0.4, 0.95], hp: 1 }, { pos: [0.6, 0.95], hp: 1 }, { pos: [0.8, 0.95], hp: 1 }, { pos: [1.2, 0.95], hp: 1 }, { pos: [1.4, 0.95], hp: 2 },
    { pos: [-1.2, 0.85], hp: 1, type: 'bomber' }, { pos: [-1.0, 0.85], hp: 1 },  { pos: [-0.6, 0.85], hp: 1, type: 'bomber' }, { pos: [-0.4, 0.85], hp: 1 }, { pos: [-0.2, 0.85], hp: 1 }, { pos: [0, 0.85], hp: 2 }, { pos: [0.2, 0.85], hp: 1 }, { pos: [0.4, 0.85], hp: 1 }, { pos: [0.6, 0.85], hp: 1, type: 'bomber'  },  { pos: [1.0, 0.85], hp: 1 }, { pos: [1.2, 0.85], hp: 1, type: 'bomber'},
    { pos: [-1.0, 0.75], hp: 1 }, { pos: [-0.8, 0.75], hp: 1 },  { pos: [-0.4, 0.75], hp: 1 }, { pos: [-0.2, 0.75], hp: 1 }, { pos: [0, 0.75], hp: 1, type: 'bomber' }, { pos: [0.2, 0.75], hp: 1 }, { pos: [0.4, 0.75], hp: 1 },  { pos: [0.8, 0.75], hp: 1 }, { pos: [1.0, 0.75], hp: 1 },
    { pos: [-0.4, 0.65], hp: 1 }, { pos: [-0.2, 0.65], hp: 1 },  { pos: [0.2, 0.65], hp: 1 }, { pos: [0.4, 0.65], hp: 1 },
  ],
    [
    { pos: [-1.4, 0.95], hp: 1, type: 'healer'  }, { pos: [-1.4, 0.85], hp: 1 }, { pos: [-1.4, 0.75], hp: 1 }, { pos: [-1.4, 0.65], hp: 1 },
    { pos: [-1.2, 0.95], hp: 2 }, { pos: [-1.2, 0.85], hp: 1, type: 'bomber' }, { pos: [-1.2, 0.75], hp: 1 }, { pos: [-1.2, 0.65], hp: 1 },
    { pos: [-0.6, 0.95], hp: 1, type: 'bomber' }, { pos: [-0.6, 0.85], hp: 2 }, { pos: [-0.6, 0.75], hp: 2 }, { pos: [-0.6, 0.65], hp: 1, type: 'bomber' },
    { pos: [-0.4, 0.95], hp: 1 }, { pos: [-0.4, 0.85], hp: 2 }, { pos: [-0.4, 0.75], hp: 2 }, { pos: [-0.4, 0.65], hp: 1 },
    { pos: [0.4, 0.95], hp: 1 }, { pos: [0.4, 0.85], hp: 2 }, { pos: [0.4, 0.75], hp: 2 }, { pos: [0.4, 0.65], hp: 1 },
    { pos: [0.6, 0.95], hp: 1, type: 'bomber' }, { pos: [0.6, 0.85], hp: 2 }, { pos: [0.6, 0.75], hp: 2 }, { pos: [0.6, 0.65], hp: 1, type: 'bomber' },
    { pos: [1.2, 0.95], hp: 2 }, { pos: [1.2, 0.85], hp: 1 , type: 'bomber'}, { pos: [1.2, 0.75], hp: 1 }, { pos: [1.2, 0.65], hp: 1 },
    { pos: [1.4, 0.95], hp: 1, type: 'healer' }, { pos: [1.4, 0.85], hp: 1 }, { pos: [1.4, 0.75], hp: 1 }, { pos: [1.4, 0.65], hp: 1 },
  ],

  [
    { pos: [-1.4, 0.95], hp: 1 }, { pos: [-1.0, 0.95], hp: 1 }, { pos: [-0.6, 0.95], hp: 1, type: 'healer' }, { pos: [-0.2, 0.95], hp: 1, type: 'bomber' }, { pos: [0.2, 0.95], hp: 1, type: 'bomber' }, { pos: [0.6, 0.95], hp: 1, type: 'healer' }, { pos: [1.0, 0.95], hp: 1 }, { pos: [1.4, 0.95], hp: 1 },
    { pos: [-1.4, 0.65], hp: 1 }, { pos: [-1.0, 0.65], hp: 1 }, { pos: [-0.6, 0.65], hp: 1 }, { pos: [-0.2, 0.65], hp: 1 }, { pos: [0.2, 0.65], hp: 1 }, { pos: [0.6, 0.65], hp: 1 }, { pos: [1.0, 0.65], hp: 1 }, { pos: [1.4, 0.65], hp: 1 },
    { pos: [-0.4, 0.85], hp: 2 }, { pos: [-0.2, 0.85], hp: 2 }, { pos: [0, 0.85], hp: 2 }, { pos: [0.2, 0.85], hp: 2 }, { pos: [0.4, 0.85], hp: 2 },
    { pos: [-0.4, 0.75], hp: 2 }, { pos: [-0.2, 0.75], hp: 2 }, { pos: [0, 0.75], hp: 2 }, { pos: [0.2, 0.75], hp: 2 }, { pos: [0.4, 0.75], hp: 2 },
    { pos: [-1.4, 0.85], hp: 1, type: 'bomber'}, { pos: [-1.4, 0.75], hp: 1 },
    { pos: [1.4, 0.85], hp: 1, type: 'bomber'}, { pos: [1.4, 0.75], hp: 1 },
  ],


];

export const useStore = create((set, get) => ({
  score: 0,
  lives: 3,
  levelIndex: 0,
  gameStatus: 'START_SCREEN',
  bricks: [],
  paddleRef: null, 
  setPaddleRef: (ref) => set({ paddleRef: ref }),
  
  paddleX: 0, 
  setPaddleX: (x) => set({ paddleX: x }), 

  initLevel: (index) => {
    const idx = index ?? get().levelIndex;
    if (idx >= LEVELS.length) {
      set({ gameStatus: 'VICTORY' });
      return;
    }

    const dynamicBricks = LEVELS[idx].map((brickData, i) => ({
      ...brickData,
      id: `L${idx}-B${i}`, 
      active: true,
      type: brickData.type || 'standard'
    }));

    set({ 
      bricks: dynamicBricks, 
      levelIndex: idx,
      gameStatus: 'READY' 
    });
  },

  startGame: () => {
    set({ score: 0, lives: 3, levelIndex: 0 });
    get().initLevel(0);
  },

  launch: () => {
    if (get().gameStatus === 'READY') set({ gameStatus: 'PLAYING' });
  },

  loseLife: () => {
    const newLives = get().lives - 1;
    if (newLives <= 0) {
      set({ lives: 0, gameStatus: 'GAME_OVER' });
    } else {
      set({ lives: newLives, gameStatus: 'READY' });
    }
  },

  hitBrick: (id) => {
    const state = get();
    let newBricks = [...state.bricks];
    let scoreGain = 0;
    let extraLives = 0;

    const targetIndex = newBricks.findIndex(b => b.id === id);
    if (targetIndex === -1 || !newBricks[targetIndex].active) return;

    const target = newBricks[targetIndex];

    if (target.type === 'standard' && target.hp > 1) {
      newBricks[targetIndex] = { ...target, hp: target.hp - 1 };
      set({ 
        bricks: newBricks, 
        score: state.score + 10 
      });
      return;
    }

    const processBrick = (brickId) => {
      const index = newBricks.findIndex(b => b.id === brickId);
      if (index === -1) return;
      
      const brick = newBricks[index];
      if (!brick.active) return;


      newBricks[index] = { ...brick, active: false, hp: 0 };
      scoreGain += 10;

      if (brick.type === 'healer') {
        extraLives += 1;
      }

      if (brick.type === 'bomber') {
        const stepX = 0.21;
        const stepY = 0.11;

        newBricks.forEach(neighbor => {
          if (!neighbor.active) return;

          const dx = Math.abs(neighbor.pos[0] - brick.pos[0]);
          const dy = Math.abs(neighbor.pos[1] - brick.pos[1]);

          if (dx <= stepX && dy <= stepY) {
            processBrick(neighbor.id);
          }
        });
      }
    };

    processBrick(id);

    const anyActive = newBricks.some(b => b.active);

    if (!anyActive) {
      get().initLevel(state.levelIndex + 1);
    } else {
      set({
        bricks: newBricks,
        score: state.score + scoreGain,
        lives: Math.min(state.lives + extraLives, 5)
      });
    }
  },
}));