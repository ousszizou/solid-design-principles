<?php

class Document {
  protected $data;
  protected $filename;

  public function open()
  {
    echo "open document";
  }
}

class WritableDocument extends Document {

  public function save()
  {
    echo "save document";
  }
}

class Project {
  protected $documents;
  protected $writableDocuments;

  public function addDocuments(Document $document)
  {
    $this->documents[] = $document;
  }

  public function addWritableDocuments(WritableDocument $document)
  {
    $this->writableDocuments[] = $document;
  }

  public function openAll()
  {
    foreach ($this->documents as $document) {
      $document->open();
    }
  }

  public function saveAll()
  {
    foreach ($this->writableDocuments as $document) {
      $document->save();
    }    
  }
}
