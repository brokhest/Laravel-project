<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\models\cathegories;
use App\models\products;


class Parse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:Parse';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Parsing info to fill the database';

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

    public function parse_this(string $link,string $cat){

        $html = file_get_contents($link);
            
        /*preg_match_all('#<div\s*class="product-layout\s*product-items\s*product-grid\s*col-xl-3\s*col-lg-4\s*col-sm-4\s*col-6\s*">(.+?)<div\s*class="product-layout.*>#su',$html,$product);*/
        preg_match_all('#<div\s*class="card\s*h-100">(.+?)<div\s*class="rating\s*mt-2">#su',$html,$all_products);
        foreach($all_products[1] as $product){
            preg_match('#<h6\s*class="card-title">\s*(.+?)</h6>#su',$product,$all_info);
            preg_match('#<img\s*src="(.+?)"#su',$product,$image);
            preg_match('#<a\s*href="(.*)">(.+?)</a>#su',$all_info[1],$product_info);
            $title = $product_info[2];
            $img=$image[1];
            
            
            
            
            var_dump($product_info[1],$product_info[2]);
            $product_info[1] = preg_replace("#amp;#","",$product_info[1]);
            $product_html = file_get_contents($product_info[1]);
            /*preg_match('#<div\s*class="tab-pane\s+active".*itemprop="description">(.+?)</div\s*class="tab-pane#su',$product_html,$full_description);*/
            preg_match('#id="tab-description"(.+?)id="tab-review"#su',$product_html,$full_description);
            preg_match('#<p\s*style="box-sizing: inherit; margin-bottom: 1rem; font-size: 14px;">(.+?)<br>(.+?)</p>#su',$full_description[1],$description);
                  
    
            preg_match('#meta\s*itemprop="price"\s*content="(.+?)"#su',$product_html,$price);
            
            if($description!=null){
                $desc=$description[1]."\n".$description[2];
            }
            else{
                $desc='...';
                /*preg_match('#<div\s*class="tab-pane\s*active"\s*id="tab-description"\s*itemprop="description">(.+?)<#su',$product_html,$description);
                if($description == null){
                    $desc="...";
                }
                else{
                    $desc = $description[2];
                    }
                */
            }
            
    
             
            if(!(products::where('name',$title)->count()>0)){
                $new_product = products::create([
                    'name' => $title,
                    'image' => $image[1],
                    'price' => $price[1],
                    'description' => $desc,
                    'cathegory' => $cat
                ]);
            }
        }
    
        foreach(products::where('cathegory',$cat) as $prod){
            var_dump($prod->name,$prod->image,$prod->price,$prod->description,$prod->cathegory);
        }
        
    
    }
    public function handle()
    {
              
        cathegories::firstOrCreate([
            'title' => 'cosplay'
        ]);
        cathegories::firstOrCreate([
            'title' => 'dakimakuras'
        ]);
        cathegories::firstOrCreate([
            'title' => 'anime related'
        ]);
        cathegories::firstOrCreate([
            'title' => 'other stuff'
        ]);
        
        $cat = 'dakimakuras';
        
        $this->parse_this("https://animeshop-akki.ru/pillow/dakimakura/", $cat);
       
        $cat = "cosplay";

        $this->parse_this("https://animeshop-akki.ru/cospley/costum/", $cat);

        $cat = "other stuff";

        $this->parse_this("https://animeshop-akki.ru/staff/bento/",$cat);
        $this->parse_this("https://animeshop-akki.ru/staff/zont/",$cat);
        $this->parse_this("https://animeshop-akki.ru/staff/ochki/",$cat);
        $this->parse_this("https://animeshop-akki.ru/staff/time/",$cat);

        $cat = "anime related";

        $this->parse_this("https://animeshop-akki.ru/paraphernalia/",$cat);
        

        /*foreach(products::where('cathegory',$cat) as $prod){
            var_dump($prod->name,$prod->image,$prod->price,$prod->description,$prod->cathegory);
        
        }*/
       
       
       
    }
    
    
    
    





}