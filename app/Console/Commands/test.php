<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\models\carts;

class test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()


    {
    //  $html = file_get_contents('https://animeshop-akki.ru/cospley/costum/bandana-povyazka-derevnya-skrytogo-peska-naruto');
    //  preg_match('##su',$html,$desc);
    //}
}
