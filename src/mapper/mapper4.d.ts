import { IMapper } from '../api/mapper';
import { uint16, uint8 } from '../api/types';
import { IInterrupt } from '../api/interrupt';
import { ICartridge } from '../api/cartridge';
export declare class Mapper4 implements IMapper {
    private readonly cartridge;
    private readonly ram;
    private readonly prg;
    private readonly chr;
    private readonly prgBanks;
    interrupt: IInterrupt;
    private readonly R;
    private register;
    private prgBankMode;
    private chrA12Inversion;
    private isIrqEnable;
    private irqReloadCounter;
    private irqCounter;
    constructor(cartridge: ICartridge, ram: Uint8Array, prg: Uint8Array, chr: Uint8Array, prgBanks?: number);
    read(address: uint16): uint8;
    write(address: uint16, data: uint8): void;
    ppuClockHandle(scanLine: number, cycle: number): void;
    private readPrg;
    private readChr;
    private writeChr;
    private parsePrgAddress;
    private parseChrAddress;
    private writeRegister;
    private writeBankSelect;
    private writeBankData;
}
