<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\models\products;
use App\models\cathegories;

class ShowAllProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:ShowAllProducts';

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
        foreach(cathegories::all() as $cathe){
            var_dump($cathe->title);
        }
        $cat = "other stuff";
        foreach(products::where('cathegory',$cat)->get() as $prod)  {
            var_dump($prod->name,$prod->image,$prod->price,$prod->description,$prod->cathegory);
        };
       
    }
}
