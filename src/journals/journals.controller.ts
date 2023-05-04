import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JournalService } from './journal.service';
import { Journal } from './journal.model';

@Controller('api/journals')
export class JournalsController {
    constructor(private readonly journalService: JournalService ) {}

    @Post() 
    create(@Body() journal : Journal): Journal {
        return this.journalService.create(journal)
    }

    @Get() 
    findAll() : Journal[] {
        console.log(`find all is working with data data`);
        console.log(this.journalService.findAll());
        return this.journalService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id : number): Journal {
        console.log(`findById called with id: ${id}`);
        return this.journalService.findById(id);
    }

    @Put(':id') 
    update(@Param('id') id : number, @Body() journal: Journal) {
        return this.journalService.update(id, journal);
    }

    @Delete(':id') 
    delete(@Param('id') id: number) {
        return this.journalService.delete(id);
    }
}

