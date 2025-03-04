
import React from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  BookOpen, 
  Award, 
  Globe,
  Calendar,
  Check,
  Heart,
  Share,
  Download,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Opportunity } from "@/types/opportunity";

interface OpportunityCardProps {
  opportunity: Opportunity;
  handleSaveOpportunity: (id: string, e: React.MouseEvent) => void;
  handleShareOpportunity: (id: string, e: React.MouseEvent) => void;
  handleDownloadDetails: (id: string, e: React.MouseEvent) => void;
  handleApplyNow: (opportunity: Opportunity) => void;
  featured?: boolean;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  handleSaveOpportunity,
  handleShareOpportunity,
  handleDownloadDetails,
  handleApplyNow,
  featured = false
}) => {
  if (featured) {
    return (
      <Card key={opportunity.id} className="border-2 border-primary/40 hover:shadow-lg transition-shadow group">
        <CardHeader className="pb-2">
          <div className="mb-2">
            {opportunity.type === 'internship' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Briefcase className="mr-1 h-3 w-3" /> Internship
              </span>
            )}
            {opportunity.type === 'research' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                <BookOpen className="mr-1 h-3 w-3" /> Research
              </span>
            )}
            {opportunity.type === 'job' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Briefcase className="mr-1 h-3 w-3" /> Job
              </span>
            )}
            {opportunity.type === 'scholarship' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <Award className="mr-1 h-3 w-3" /> Scholarship
              </span>
            )}
          </div>
          <div className="flex justify-between items-start">
            <CardTitle>{opportunity.title}</CardTitle>
            <div className="flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => handleSaveOpportunity(opportunity.id, e)}
                    >
                      <Heart className={`h-4 w-4 ${opportunity.saved ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{opportunity.saved ? 'Remove from favorites' : 'Save to favorites'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => handleShareOpportunity(opportunity.id, e)}
                    >
                      <Share className="h-4 w-4 text-gray-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share opportunity</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex items-center mt-1">
            <span className="mr-3">{opportunity.organization}</span>
            <span className="flex items-center">
              <Globe className="mr-1 h-3 w-3" />
              {opportunity.location}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <CardDescription className="text-base">{opportunity.description}</CardDescription>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
            <ul className="mt-2 space-y-1">
              {opportunity.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-sm text-red-600 mt-4">
            <Calendar className="mr-2 h-4 w-4" />
            Application Deadline: {opportunity.deadline}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            variant="outline" 
            size="sm"
            onClick={(e) => handleDownloadDetails(opportunity.id, e)}
            className="text-gray-600"
          >
            <Download className="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button 
            onClick={() => handleApplyNow(opportunity)}
            className="w-2/3 flex items-center justify-center group-hover:bg-primary/90 transition-colors"
          >
            <span>Apply Now</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card key={opportunity.id} className="overflow-hidden hover:shadow-md transition-shadow group hover:border-primary/50">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="mb-2">
                {opportunity.type === 'internship' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Briefcase className="mr-1 h-3 w-3" /> Internship
                  </span>
                )}
                {opportunity.type === 'research' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <BookOpen className="mr-1 h-3 w-3" /> Research
                  </span>
                )}
                {opportunity.type === 'job' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Briefcase className="mr-1 h-3 w-3" /> Job
                  </span>
                )}
                {opportunity.type === 'scholarship' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    <Award className="mr-1 h-3 w-3" /> Scholarship
                  </span>
                )}
                {opportunity.applicationStatus === 'applied' && (
                  <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                    <Check className="mr-1 h-3 w-3" /> Applied
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1">{opportunity.title}</h3>
            </div>
            <div className="flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => handleSaveOpportunity(opportunity.id, e)}
                    >
                      <Heart className={`h-4 w-4 ${opportunity.saved ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{opportunity.saved ? 'Remove from favorites' : 'Save to favorites'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => handleShareOpportunity(opportunity.id, e)}
                    >
                      <Share className="h-4 w-4 text-gray-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share opportunity</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex items-center mb-4">
            <span className="mr-3">{opportunity.organization}</span>
            <span className="flex items-center">
              <Globe className="mr-1 h-3 w-3" />
              {opportunity.location}
            </span>
          </div>
          <p className="text-gray-700 text-sm">{opportunity.description}</p>
        </div>
        
        <div className="md:w-1/4 bg-gray-50 p-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-red-600 mb-4 flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> 
              <span>Deadline: {opportunity.deadline}</span>
            </div>
            <ul className="text-xs text-gray-600 mb-6">
              {opportunity.requirements.slice(0, 2).map((req, index) => (
                <li key={index} className="flex items-start mb-1">
                  <Check className="h-3 w-3 text-gray-500 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
              {opportunity.requirements.length > 2 && (
                <li className="text-xs text-gray-500 ml-4">
                  +{opportunity.requirements.length - 2} more requirements
                </li>
              )}
            </ul>
          </div>
          
          <div className="space-y-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full flex items-center justify-center"
              onClick={(e) => handleDownloadDetails(opportunity.id, e)}
            >
              <Download className="mr-2 h-3 w-3" />
              <span>Download Details</span>
            </Button>
            
            <Button 
              size="sm" 
              className="w-full flex items-center justify-center"
              onClick={() => handleApplyNow(opportunity)}
              disabled={opportunity.applicationStatus === 'applied'}
            >
              {opportunity.applicationStatus === 'applied' ? (
                <>
                  <Check className="mr-2 h-3 w-3" />
                  <span>Applied</span>
                </>
              ) : (
                <>
                  <span>Apply Now</span>
                  <ArrowRight className="ml-2 h-3 w-3" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OpportunityCard;
