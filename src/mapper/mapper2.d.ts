import { IMapper } from '../api/mapper';
import { IInterrupt } from '../api/interrupt';
import { uint16, uint8 } from '../api/types';
import { ICartridge } from '../api/cartridge';
export declare class Mapper2 implements IMapper {
    private readonly cartridge;
    private readonly ram;
    private readonly prg;
    private readonly chr;
    interrupt: IInterrupt;
    private bankSelect;
    constructor(cartridge: ICartridge, ram: Uint8Array, prg: Uint8Array, chr: Uint8Array);
    read(address: uint16): uint8;
    write(address: uint16, data: uint8): void;
    ppuClockHandle(scanLine: number, cycle: number): void;
}
